'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {  Star, ArrowRight,  CheckCircle, Eye,   Diamond } from 'lucide-react';



const JobDialog = (props) => {

    const {selectedJob ,closeJobModal ,handleViewDetalJob  }= props

  return (
    <Dialog open={!!selectedJob} onOpenChange={closeJobModal}>
    <DialogContent className="w-[90vh] max-w-none max-h-[95vh] overflow-y-auto p-0 rounded-3xl bg-slate-900 border-slate-700">
     {selectedJob && (
       <>
         <div className="relative">
           <img
             src={selectedJob.image}
             alt={selectedJob.title}
             className="w-full h-96 object-cover rounded-t-3xl"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-3xl"></div>
           
           <div className="absolute top-8 right-8">
             <span className="bg-white/90 text-slate-800 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
               {selectedJob.category}
             </span>
           </div>
           
           <div className="absolute bottom-8 left-8">
             <div className="flex text-amber-400 mb-2">
               {[...Array(selectedJob.rating)].map((_, i) => (
                 <Star key={i} className="h-6 w-6 fill-current" />
               ))}
             </div>
             <div className="text-white text-3xl font-bold">{selectedJob.price}</div>
             <div className="text-amber-300 font-medium text-lg">{selectedJob.duration}</div>
           </div>
         </div>
         
         <div className="p-10">
           <DialogHeader className="mb-8">
             <DialogTitle className="text-4xl font-black text-white mb-4">
               {selectedJob.title}
             </DialogTitle>
             <DialogDescription className="text-xl text-gray-300 leading-relaxed">
               {selectedJob.description}
             </DialogDescription>
           </DialogHeader>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
             <Card className="bg-slate-800/50 border-slate-700/50">
               <CardHeader>
                 <CardTitle className="text-white flex items-center">
                   <Diamond className="h-5 w-5 mr-3 text-amber-400" />
                   Premium Materials
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-gray-300 leading-relaxed text-lg">{selectedJob.materials}</p>
               </CardContent>
             </Card>
             
             <Card className="bg-slate-800/50 border-slate-700/50">
               <CardHeader>
                 <CardTitle className="text-white flex items-center">
                   <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                   Luxury Features
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                   {selectedJob.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center text-gray-300 text-lg">
                       <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-3"></div>
                       {feature}
                     </div>
                   ))}
                 </div>
               </CardContent>
             </Card>
           </div>

           <div className="flex flex-col sm:flex-row gap-4">
             <Button 
               variant="ghost" 
               onClick={closeJobModal} 
               className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-700 transition-all duration-300"
             >
               Close
             </Button>
             <Button
               onClick={() => {
                 closeJobModal();
                 handleViewDetalJob(selectedJob.id);
               }}
               className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
             >
               <Eye className="mr-2 h-5 w-5" />
                   View details
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
           </div>
         </div>
       </>
     )}
   </DialogContent>
 </Dialog>
  )
}

export default JobDialog