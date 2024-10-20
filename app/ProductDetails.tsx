"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProductDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400&text=Image+2",
    "/placeholder.svg?height=400&width=400&text=Image+3",
    "/placeholder.svg?height=400&width=400&text=Image+4",
  ];

  const specifications = [
    {
      name: "Processor",
      value: "Intel Core i7-11800H",
      guarantee: "36 months",
    },
    { name: "RAM", value: "16GB DDR4", guarantee: "36 months" },
    { name: "Storage", value: "512GB NVMe SSD", guarantee: "36 months" },
    { name: "Display", value: '15.6" FHD IPS 144Hz', guarantee: "36 months" },
    {
      name: "Graphics",
      value: "NVIDIA GeForce RTX 3060 6GB",
      guarantee: "36 months",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "John D.",
      rating: 5,
      comment: "Excellent laptop, very fast and smooth!",
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      comment: "Great value for money, but the fan can be a bit loud.",
    },
    {
      id: 3,
      author: "Mike R.",
      rating: 5,
      comment: "Perfect for gaming and work. Highly recommended!",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`Product image ${currentImage + 1}`}
              className="object-cover w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex mt-4 gap-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden ${
                  index === currentImage ? "ring-2 ring-primary" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImage(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-4">TechPro Gaming Laptop X1</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4">$1,299.99</p>
          <p className="mb-4">
            Experience unparalleled gaming performance with the TechPro Gaming
            Laptop X1. Featuring the latest Intel Core i7 processor and NVIDIA
            RTX graphics, this laptop delivers smooth gameplay and
            lightning-fast responsiveness.
          </p>
          <div className="flex gap-4 mb-6">
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline">
              <Heart className="mr-2 h-4 w-4" /> Wishlist
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Available Coupons</h3>
              <div className="space-y-2">
                <Badge variant="secondary" className="text-sm">
                  SAVE10: 10% off
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  FREESHIP: Free shipping
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          key="product-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-8 grid grid-cols-3 gap-8">
            <AnimatePresence>
              <Card className="col-span-2">
                <CardContent className="p-6">
                  <Tabs defaultValue="specifications">
                    <TabsList>
                      <TabsTrigger value="specifications">
                        Specifications
                      </TabsTrigger>

                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>

                    <TabsContent value="specifications">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold mb-4">
                          Product Specifications
                        </h3>

                        <table className="min-w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left">
                                Specification
                              </th>

                              <th className="border border-gray-300 px-12 py-2 text-left">
                                Value
                              </th>

                              <th className="border border-gray-300 px-4 py-2 text-left">
                                Guarantee
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {specifications.map((spec, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">
                                  {spec.name}
                                </td>

                                <td className="border border-gray-300 px-14 py-2">
                                  {spec.value}
                                </td>

                                <td className="border border-gray-300 px-4 py-2">
                                  {spec.guarantee}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <Separator className="bg-neutral-900 my-4" />

                        <div className="px-1">
                          <h3 className="text-lg font-semibold mb-4">
                            Product Review
                          </h3>

                          <p className="text-gray-600">
                            The TechPro Gaming Laptop X1 is a powerhouse of
                            performance, offering exceptional gaming and
                            productivity capabilities. With its
                            high-refresh-rate display and powerful graphics
                            card, it delivers smooth and immersive gameplay. The
                            build quality is solid, and the keyboard is
                            comfortable for long gaming sessions. While the fan
                            noise can be noticeable under heavy load, the
                            cooling system effectively manages heat. Overall,
                            it's an excellent choice for gamers and power users
                            alike.
                          </p>
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="reviews">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {reviews.map((review) => (
                          <div key={review.id}>
                            <div className="flex items-center mb-2">
                              <Avatar className="h-10 w-10">
                                <AvatarImage
                                  src={`https://i.pravatar.cc/40?u=${review.id}`}
                                />

                                <AvatarFallback>
                                  {review.author[0]}
                                </AvatarFallback>
                              </Avatar>

                              <div className="ml-4">
                                <p className="font-semibold">{review.author}</p>

                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>

                            <p className="text -gray-600">{review.comment}</p>

                            <Separator className="my-4" />
                          </div>
                        ))}
                      </motion.div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </AnimatePresence>
            <div>
              <h3 className="text-lg font-semibold mb-4">Similar Products</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <Card key={item}>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <img
                        src={`/placeholder.svg?height=80&width=80&text=Product+${item}`}
                        alt={`Similar Product ${item}`}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold">
                          TechPro Laptop Model {item}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Starting from $1,199.99
                        </p>
                        <Button variant="link" className="p-0">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
