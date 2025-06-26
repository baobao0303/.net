
namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 50;
        private const int MinPageSize = 1;

        public int PageIndex { get; set; } = 1;
        private int _pageSize = 6;

        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = Math.Clamp(value, MinPageSize, MaxPageSize);
        }
        public int? BrandId { get; set; }
        public int? TypeId { get; set; }
        public string? Sort { get; set; }

        private string _search;
        public string Search
        {
            get => _search ?? string.Empty;
            set => _search = value?.ToLower() ?? string.Empty;
        }
    }
}