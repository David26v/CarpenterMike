'use client'
import React, { useState, useMemo } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, X, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Eye, Shield, Crown, Sparkles, Diamond, Search, Filter, Grid } from 'lucide-react';

const JobsDone = (props) => {
    const { jobs, NavigateToDetailed } = props;
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(jobs.map(job => job.category))];
        return ['All', ...uniqueCategories];
    }, [jobs]);

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                job.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
    }, [jobs, searchQuery, selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };

    return (
        <div>
            <section id="jobs" className="pt-32 pb-20 min-h-screen bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
                            Jobs <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Done</span>
                        </h2>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="mb-12">
                        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative w-full lg:w-96">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search projects, categories, descriptions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 pr-4 py-3 bg-slate-800/50 border-slate-700/50 text-white placeholder-gray-400 focus:border-amber-500/50 focus:ring-amber-500/20 rounded-xl"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            {/* Filter Toggle Button (Mobile) */}
                            <Button
                                onClick={() => setShowFilters(!showFilters)}
                                variant="outline"
                                className="lg:hidden bg-slate-800/50 border-slate-700/50 text-white hover:bg-slate-700/50 rounded-xl"
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                Filters
                            </Button>

                            {/* Results Count */}
                            <div className="text-gray-400 text-sm">
                                {filteredJobs.length} project{filteredJobs.length !== 1 ? 's' : ''} found
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {categories.map((category) => (
                                    <Button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        className={`rounded-full px-6 py-2 transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105'
                                                : 'bg-slate-800/50 border-slate-700/50 text-gray-300 hover:bg-slate-700/50 hover:border-amber-500/50 hover:text-white'
                                        }`}
                                    >
                                        {category}
                                        {category !== 'All' && (
                                            <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                                {jobs.filter(job => job.category === category).length}
                                            </span>
                                        )}
                                    </Button>
                                ))}
                                
                                {/* Clear Filters Button */}
                                {(searchQuery || selectedCategory !== 'All') && (
                                    <Button
                                        onClick={clearFilters}
                                        variant="ghost"
                                        className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-full px-4 py-2"
                                    >
                                        <X className="h-4 w-4 mr-1" />
                                        Clear All
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Jobs Grid */}
                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {filteredJobs.map((job, index) => (
                                <div
                                    key={job.id}
                                    className={`animate-fade-in-up transition-all duration-700`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <Card
                                        className="cursor-pointer hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-slate-800/80 backdrop-blur-xl border-slate-700/50 hover:border-amber-500/50 group overflow-hidden"
                                        onClick={() => NavigateToDetailed(job.id , job.name)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={job.preview_images}
                                                alt={job.title}
                                                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                                            />
                                            
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                            
                                            <div className="absolute top-6 right-6">
                                                <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                    {job.category}
                                                </span>
                                            </div>
                                            


                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                                                    <Eye className="h-8 w-8 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <CardHeader className="pb-3">
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-2xl text-white group-hover:text-amber-400 transition-colors duration-300">
                                                    {job.title}
                                                </CardTitle>
                                                <div className="flex">
                                                    {[...Array(job.rating)].map((_, i) => (
                                                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        
                                        <CardContent className="pb-6">
                                            <CardDescription className="line-clamp-3 text-gray-300 leading-relaxed text-lg">
                                                {job.description}
                                            </CardDescription>
                                        </CardContent>
                                        
                                        <CardFooter className="pt-0">
                                            <div className="flex justify-between items-center w-full">
                                                <span className="text-amber-400 font-semibold text-lg">View Pictures</span>
                                                <ArrowRight className="h-6 w-6 text-amber-400 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // No Results State
                        <div className="text-center py-20">
                            <div className="text-gray-500 mb-6">
                                <Grid className="h-20 w-20 mx-auto mb-4 opacity-50" />
                                <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
                                <p className="text-lg">
                                    {searchQuery 
                                        ? `No projects match "${searchQuery}"` 
                                        : `No projects in "${selectedCategory}" category`
                                    }
                                </p>
                            </div>
                            <Button
                                onClick={clearFilters}
                                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full px-8 py-3"
                            >
                                Show All Projects
                            </Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default JobsDone;