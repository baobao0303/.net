using System.Text.Json;
using Core.Entities;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context)
        {
            var basePath = Path.Combine(Directory.GetCurrentDirectory(), "../Infrastructure/Data/SeedData");

            if (!context.ProductBrands.Any())
            {
                var brandsData = File.ReadAllText(Path.Combine(basePath, "brands.json"));
                var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                context.ProductBrands.AddRange(brands!);
            }

            // Seed ProductTypes
            if (!context.ProductTypes.Any())
            {
                var typesData = File.ReadAllText(Path.Combine(basePath, "types.json"));
                var types = JsonSerializer.Deserialize<List<ProductType>>(typesData,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                context.ProductTypes.AddRange(types!);
            }

            // Seed Products
            if (!context.Products.Any())
            {
                var productsData = File.ReadAllText(Path.Combine(basePath, "products.json"));
                var products = JsonSerializer.Deserialize<List<Product>>(productsData,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                context.Products.AddRange(products!);
            }

            // Save if there are changes
            if (context.ChangeTracker.HasChanges())
            {
                await context.SaveChangesAsync();
            }
        }
    }
}
