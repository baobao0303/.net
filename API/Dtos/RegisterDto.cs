using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Display Name is required")]
        public string DisplayName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [RegularExpression(
            @"(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"":;'?/<>.,])(?!.*\s).*",
            ErrorMessage = "Password must be 6-10 characters and include a digit, lowercase, uppercase, special character, and no spaces.")]
        public string Password { get; set; } = string.Empty;
    }
}
