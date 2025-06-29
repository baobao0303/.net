using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Core.Entities.Identity;

namespace Infrastructure.Data
{
    public class AppIdentityDbContext : IdentityDbContext<AppUser>
    {
        public AppIdentityDbContext(DbContextOptions<AppIdentityDbContext> options) : base(options)
        {
        }
         public DbSet<Address> Addresses { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
              builder.Entity<AppUser>()
                .HasOne(a => a.Address)
                .WithOne(b => b.AppUser)
                .HasForeignKey<Address>(b => b.AppUserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}