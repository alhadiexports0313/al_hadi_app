'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/content';
import { Search, Download, Package, Clock, Award, CheckCircle, Star, Globe, Shield, Truck, Filter, Grid, Heart, Eye, ShoppingBag } from 'lucide-react';

// PDF Generation Function
const generateProductCataloguePDF = () => {
  // Create a simple HTML content for the PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>AL HADI EXPORTS - Product Catalogue 2024</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #1e40af; padding-bottom: 20px; }
        .company-name { font-size: 28px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
        .tagline { font-size: 14px; color: #666; }
        .product { margin-bottom: 25px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
        .product-name { font-size: 18px; font-weight: bold; color: #1e40af; margin-bottom: 8px; }
        .category { background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px; color: #374151; display: inline-block; margin-bottom: 8px; }
        .description { margin-bottom: 10px; color: #374151; }
        .features { margin-bottom: 10px; }
        .feature-item { background: #eff6ff; padding: 2px 6px; border-radius: 3px; font-size: 11px; margin-right: 5px; display: inline-block; margin-bottom: 3px; }
        .order-info { display: flex; gap: 20px; margin-top: 10px; font-size: 12px; }
        .order-detail { color: #666; }
        .certifications { margin-top: 8px; }
        .cert-badge { background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 3px; font-size: 10px; margin-right: 5px; }
        .footer { margin-top: 40px; text-align: center; border-top: 1px solid #ddd; padding-top: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-name">AL HADI EXPORTS</div>
        <div class="tagline">Global Leaders in Knit Fashion & Retail Garments</div>
        <div style="margin-top: 10px; font-size: 14px; color: #666;">Product Catalogue 2024</div>
      </div>
      
      ${products.map(product => `
        <div class="product">
          <div class="product-name">${product.name}</div>
          <div class="category">${product.category}</div>
          <div class="description">${product.description}</div>
          <div class="features">
            <strong>Features:</strong><br>
            ${product.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
          </div>
          <div class="order-info">
            <div class="order-detail"><strong>Min Order:</strong> ${product.minOrder}</div>
            <div class="order-detail"><strong>Lead Time:</strong> ${product.leadTime}</div>
          </div>
          <div class="certifications">
            <strong>Certifications:</strong>
            ${product.certifications.map(cert => `<span class="cert-badge">${cert}</span>`).join('')}
          </div>
        </div>
      `).join('')}
      
      <div class="footer">
        <div><strong>AL HADI EXPORTS</strong></div>
        <div>Contact: info@alhadiexports.com | Phone: +92-XXX-XXXXXXX</div>
        <div>Address: Industrial Area, Sialkot, Pakistan</div>
        <div style="margin-top: 10px;">Generated on ${new Date().toLocaleDateString()}</div>
      </div>
    </body>
    </html>
  `;

  // Create a Blob with the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Create a download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Al_Hadi_Exports_Catalogue.pdf';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up
  URL.revokeObjectURL(url);
};

// Dynamic Product Gallery Data
const getProductGalleryImages = () => {
  const kidsImages = [
    'Boys Tee.jpeg', 'KIds T shirts.jpeg', "Kid's Jacket.jpeg", "Kid's Joggsuit.jpeg", 
    "Kid's Polo.jpeg", "Kid's Tank top.jpeg", "Kid's Tee.jpeg", "Kid's Trouser.jpeg", 
    "Kid's Zipper Hood.jpeg", 'Kids Hood.jpeg', 'Kids Shorts.jpeg', 'Kids Suit.jpeg',
    'Kids Tank top.jpeg', 'Kids Trouser.jpeg', 'Kids Winter.jpeg', 'Kids Zipper Hood.jpeg',
    'Kids shorts And Tee.jpeg', 'Kids t shirt.jpeg'
  ];

  const mensImages = [
    'Fleece_Hooded_Jackets.jpg', "Men's Crew Neck.jpeg", "Men's Hood.jpeg", "Men's Jacket.jpeg",
    "Men's Joggsuit.jpeg", "Men's Night wear.jpeg", "Men's POLO.jpg", "Men's Polo.jpeg",
    "Men's T Shirt.jpeg", "Men's Trouser.jpeg", "Men's Zipper.jpg", 'Mens Crew Neck.jpeg',
    'Mens Garments.jpeg', 'Mens Hood.jpeg', 'Mens LS crew.jpeg', 'Mens PO Hood.jpeg',
    'Mens Shorts.jpeg', 'Mens Suit.jpeg', 'Mens Tee.jpeg', 'Mens Zipper Hood.jpeg',
    'POLO.jpeg'
  ];

  const womenImages = [
    'Ladies Hood.jpeg', 'Ladies Jacket.jpeg', 'Ladies Joggsuit.jpeg', 'Ladies Polo Tee.jpeg',
    'Ladies Polo.jpeg', 'Ladies Round Neck.jpeg', 'Ladies Shorts.jpeg', 'Ladies T-Shirt.jpeg',
    'Ladies T-Shirts.jpeg', 'Ladies Tee.jpeg', 'Ladies Trouser.jpeg', 'Ladies V Neck Tee.jpeg',
    'Ladies Zipper.jpeg'
  ];

  const formatImageData = (images: string[], category: string, folder: string) => {
    return images.map(imageName => ({
      id: `${category}-${imageName}`,
      name: imageName.replace(/\.[^/.]+$/, "").replace(/[_']/g, ' ').replace(/\s+/g, ' ').trim(),
      src: `/images/products/${folder}/${imageName}`,
      category: category,
      alt: `${category} - ${imageName.replace(/\.[^/.]+$/, "").replace(/[_']/g, ' ')}`
    }));
  };

  return [
    ...formatImageData(kidsImages, 'Kids', 'kids'),
    ...formatImageData(mensImages, 'Mens', 'mens'),
    ...formatImageData(womenImages, 'Women', 'women')
  ];
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState(getProductGalleryImages());

  // Get unique categories for products
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];
  
  // Gallery categories
  const galleryCategories = ['All', 'Kids', 'Mens', 'Women'];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Filter gallery images
  const filteredGalleryImages = galleryImages.filter(image => {
    return galleryCategory === 'All' || image.category === galleryCategory;
  });

  // Handle gallery category change with loading animation
  const handleGalleryFilter = (category: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setGalleryCategory(category);
      setIsLoading(false);
    }, 300);
  };

  // Category icons mapping
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Outerwear': '🧥',
      'Casual Wear': '👕',
      'Nightwear': '🌙',
      'Athletic Wear': '🏃',
      'Denim': '👖',
      'Formal Wear': '👔',
      'Kids Wear': '👶',
      'Workwear': '🔧',
      'Knitwear': '🧶',
      'Accessories': '👜'
    };
    return iconMap[category] || '📦';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Product Range
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover our comprehensive collection of premium garments crafted with precision and quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-blue-200">
              <Package className="w-5 h-5" />
              <span>{products.length}+ Product Categories</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Globe className="w-5 h-5" />
              <span>Global Export Quality</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Award className="w-5 h-5" />
              <span>Certified Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Download CTA - Prominent Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Download Our Full Product Catalogue
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get instant access to our complete 2024 product catalogue with detailed specifications, 
              minimum order quantities, and certification information for all our garment categories.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Package className="w-6 h-6 text-blue-200" />
                <span>Complete Product Details</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-blue-200" />
                <span>Lead Times & MOQs</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Award className="w-6 h-6 text-blue-200" />
                <span>Certification Information</span>
              </div>
            </div>
            <button
              onClick={generateProductCataloguePDF}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-6 h-6" />
              Download Our Full Product Catalogue (PDF)
            </button>
            <p className="text-sm text-blue-200 mt-4">
              Instant download • Updated 2024 • Al_Hadi_Exports_Catalogue.pdf
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'All' ? '🌟 All Products' : `${getCategoryIcon(category)} ${category}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-6xl">{getCategoryIcon(product.category)}</div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{product.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Order Information */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-gray-500">Min Order</div>
                          <div className="font-semibold">{product.minOrder}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <div className="text-gray-500">Lead Time</div>
                          <div className="font-semibold">{product.leadTime}</div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs flex items-center gap-1"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link href="/contact" className="flex-1">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                          Get Quote
                        </button>
                      </Link>
                      <button 
                        className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm font-medium"
                        onClick={() => alert(`Product Details:\n\nName: ${product.name}\nCategory: ${product.category}\nDescription: ${product.description}\nFeatures: ${product.features.join(', ')}\nMin Order: ${product.minOrder}\nLead Time: ${product.leadTime}\nCertifications: ${product.certifications.join(', ')}`)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modern Product Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Grid className="w-4 h-4" />
              Product Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our premium range of garments across different categories. Each piece showcases our commitment to quality and craftsmanship.
            </p>
            
            {/* Gallery Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="w-4 h-4 text-blue-600" />
                <span>{galleryImages.length}+ Products</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Eye className="w-4 h-4 text-blue-600" />
                <span>HD Quality Images</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Premium Collection</span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleGalleryFilter(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  galleryCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category === 'All' && <Grid className="w-4 h-4" />}
                  {category === 'Kids' && <span className="text-sm">👶</span>}
                  {category === 'Mens' && <span className="text-sm">👨</span>}
                  {category === 'Women' && <span className="text-sm">👩</span>}
                  {category}
                </span>
                {galleryCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
                <div className="flex items-center gap-3 text-blue-600">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-medium">Loading {galleryCategory} Collection...</span>
                </div>
              </div>
            )}

            {/* Image Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
              {filteredGalleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      loading="lazy"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        image.category === 'Kids' ? 'bg-pink-500/90 text-white' :
                        image.category === 'Mens' ? 'bg-blue-500/90 text-white' :
                        'bg-purple-500/90 text-white'
                      }`}>
                        {image.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-col gap-2">
                        <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-500 transition-colors duration-200">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-semibold text-gray-900 text-sm truncate mb-1">
                            {image.name}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            Premium Quality • Export Grade
                          </p>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-600 text-white text-xs py-1.5 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-1">
                              <ShoppingBag className="w-3 h-3" />
                              Quote
                            </button>
                            <button className="flex-1 border border-gray-300 text-gray-700 text-xs py-1.5 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-blue-600 transition-colors duration-300 truncate">
                      {image.name}
                    </h3>
                    <p className="text-xs text-gray-500 text-center mt-1">
                      {image.category} Collection
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredGalleryImages.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try selecting a different category or check back later for new additions.
                </p>
              </div>
            )}
          </div>

          {/* Gallery Footer Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{filteredGalleryImages.length}</div>
                <div className="text-gray-600 text-sm">
                  {galleryCategory === 'All' ? 'Total Products' : `${galleryCategory} Items`}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">HD</div>
                <div className="text-gray-600 text-sm">Quality Images</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Authentic Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive manufacturing and export services to meet all your garment needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Manufacturing</h3>
              <p className="text-gray-600">
                Tailored production solutions with flexible MOQs and custom specifications
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring international standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Shipping</h3>
              <p className="text-gray-600">
                Reliable worldwide delivery with comprehensive logistics support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-gray-600 mb-8">
                Our commitment to excellence ensures every product meets international quality standards 
                through rigorous testing and certification processes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Pre-production sample approval</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">In-line quality monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Final inspection before shipment</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">International certification compliance</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                  <div className="text-gray-600">Quality Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Quality Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Inspection Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Order?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and get a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Request Quote
              </button>
            </Link>
            <button 
              onClick={generateProductCataloguePDF}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}