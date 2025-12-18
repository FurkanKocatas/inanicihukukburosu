'use server';

type State = {
    success: boolean;
    message: string | null;
    error?: string | null;
};

export async function submitContact(prevState: State, formData: FormData): Promise<State> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Verify Cloudflare Turnstile Captcha
    const token = formData.get('cf-turnstile-response') as string;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (token && turnstileSecret) {
        // Only verify if keys are present (development fallback acceptable if keys missing, or strict fail? 
        // Better to be strict if production, but graceful if keys missing for testing?
        // Let's implement strict verification if key is present, otherwise bypass for dev specific cases? 
        // No, let's assume keys will be provided.

        const ip = formData.get('cf-connecting-ip') as string || '127.0.0.1'; // Next.js often hides IP, can rely on turnstile verification without IP or use headers in middleware.
        // Simple verification
        const verificationFormData = new FormData();
        verificationFormData.append('secret', turnstileSecret);
        verificationFormData.append('response', token);
        // verificationFormData.append('remoteip', ip);

        try {
            const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
            const result = await fetch(url, {
                body: verificationFormData, // Use correct variable
                method: 'POST',
            });
            const outcome = await result.json();
            if (!outcome.success) {
                console.error("Turnstile verification failed:", outcome);
                return { success: false, message: null, error: "Güvenlik doğrulaması başarısız. Lütfen tekrar deneyin." };
            }
        } catch (e) {
            console.error("Turnstile error:", e);
            return { success: false, message: null, error: "Güvenlik sistemi hatası." };
        }
    } else if (process.env.NODE_ENV === 'production' && !token) {
        return { success: false, message: null, error: "Güvenlik doğrulaması eksik." };
    }

    // --- EMAIL SENDING WITH RESEND ---
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
        try {
            const { Resend } = await import('resend');
            const resend = new Resend(resendApiKey);

            const { data, error } = await resend.emails.send({
                from: 'İnanıcı Hukuk <onboarding@resend.dev>', // Update this to your verified domain later
                to: ['info@avahmetmirzainanici.com.tr'], // The destination email
                replyTo: email,
                subject: `Yeni İletişim: ${subject}`,
                html: `
                    <h2>Yeni Web Sitesi Mesajı</h2>
                    <p><strong>Gönderen:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Konu:</strong> ${subject}</p>
                    <hr />
                    <h3>Mesaj:</h3>
                    <p>${message}</p>
                `
            });

            if (error) {
                console.error("Resend Error:", error);
                return { success: false, message: null, error: "Mesaj gönderilirken bir hata oluştu." };
            }
        } catch (error) {
            console.error("Email failed:", error);
            return { success: false, message: null, error: "Sunucu hatası: Mesaj gönderilemedi." };
        }
    } else {
        console.warn("RESEND_API_KEY is missing. Email not sent.");
        // In dev without keys, we still return success to show UI flow
        if (process.env.NODE_ENV === 'production') {
            return { success: false, message: null, error: "Sistem yapılandırma hatası." };
        }
    }

    return { success: true, message: "Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız." };
}
