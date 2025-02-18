using MailKit.Net.Smtp;
using MimeKit;
using System.Threading.Tasks;

public class EmailService
{
    private readonly string _smtpServer = "smtp.gmail.com";
    private readonly int _port = 587;
    private readonly string _fromEmail = "bookwormbyunstoppable2025@gmail.com";
    private readonly string _password = "ailg tasy rcvm xfhp";

    public async Task SendEmailAsync(string toEmail, string subject, string body)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress("EmailMicroservice", _fromEmail));
        email.To.Add(new MailboxAddress("", toEmail));
        email.Subject = subject;
        email.Body = new TextPart("html") { Text = body };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_smtpServer, _port, MailKit.Security.SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(_fromEmail, _password);
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);
    }
}
