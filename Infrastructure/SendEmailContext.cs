using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace Infrastructure
{
    public class EmailService
    {
        public async Task SendEmailAsync()
        {
            var email = new MimeMessage();
            email.From.Add(new MailboxAddress("Bảo Mập", "lcho332002@gmail.com"));
            email.To.Add(MailboxAddress.Parse("lcho332002@gmail.com"));
            email.Subject = "Test email from .NET using App Password";
            email.Body = new TextPart("plain")
            {
                Text = "Hello from .NET!"
            };

            var emailUsername = "lcho332002@gmail.com";
            var appPassword = "bmxr evrn izyo uiuv"; 

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(emailUsername, appPassword);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
