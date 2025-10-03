'use client';

import { useState } from 'react';
import { CheckCircle, Clock, Award, Filter, Search } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { products, services } from '@/data/content';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const productIcons = {
    'Formal Wear': '👔',
    'Casual Wear': '👕',
    'Kids Wear': '👶',
    'Athletic Wear': '🏃',
    'Denim': '👖'
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover our comprehensive range of premium quality garments designed for global markets
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className={`h-64 ${index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-8xl mb-4">
                      {productIcons[product.category as keyof typeof productIcons] || '👔'}
                    </div>
                    <div className="text-lg font-medium opacity-90">{product.category}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                      {product.certifications.length} Cert{product.certifications.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-3 border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Lead Time:
                      </span>
                      <span className="font-medium text-gray-900">{product.leadTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Min. Order:</span>
                      <span className="font-medium text-gray-900">{product.minOrder}</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {product.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-3 w-full">
                    <Button variant="primary" className="flex-1">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing and support services to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className="text-center">
                <CardHeader>
                  <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-2xl">🔧</div>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every garment undergoes rigorous quality control processes to ensure it meets our 
                high standards and your expectations. Our quality assurance team conducts multiple 
                inspections throughout the manufacturing process.
              </p>
              <div className="space-y-4">
                {[
                  'Pre-production sample approval',
                  'In-line quality control during production',
                  'Final random inspection before packaging',
                  'Third-party testing and certification',
                  'Detailed quality reports for every order'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quality Standards</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Defect Rate:</span>
                  <span className="font-bold text-accent">{'<0.5%'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>On-time Delivery:</span>
                  <span className="font-bold text-accent">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer Satisfaction:</span>
                  <span className="font-bold text-accent">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Return Rate:</span>
                  <span className="font-bold text-accent">{'<0.2%'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact our team to discuss your requirements and get a customized quote for your garment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Request Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}