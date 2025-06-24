using System.Diagnostics.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace API.AddControllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public string GetProducts()
        {
            return "List of products";
        }

        [HttpGet("{id}")]
        public string GetProductById(int id)
        {
            return $"Product details for product with ID: {id}";
        }
    }
}