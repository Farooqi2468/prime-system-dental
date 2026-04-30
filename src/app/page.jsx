import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Star,
  Clock,
  Users,
  Award,
  Shield,
  Heart,
  Smile,
  Zap,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Smile className="h-8 w-8 text-blue-600" />,
      title: "General Dentistry",
      description:
        "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      features: [
        "Regular Cleanings",
        "Cavity Fillings",
        "Oral Exams",
        "X-rays",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our advanced cosmetic dental procedures.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Restorative Dentistry",
      description:
        "Restore your teeth's function and appearance with our expert treatments.",
      features: [
        "Crowns & Bridges",
        "Dental Implants",
        "Root Canals",
        "Dentures",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Pediatric Dentistry",
      description:
        "Gentle, kid-friendly dental care in a comfortable environment.",
      features: [
        "Child Cleanings",
        "Fluoride Treatments",
        "Sealants",
        "Education",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Ayesha Khan",
      rating: 5,
      text: "Dr. Smith and the team are absolutely wonderful. They made my dental implant procedure so comfortable and the results are amazing!",
      treatment: "Dental Implants",
    },
    {
      name: "Ali Khan",
      rating: 5,
      text: "Best dental experience I've ever had. The office is modern, staff is friendly, and Dr. Smith is incredibly skilled and gentle.",
      treatment: "Cosmetic Dentistry",
    },
    {
      name: "Fatima Ahmed",
      rating: 5,
      text: "My kids actually look forward to their dental visits now! The pediatric team is fantastic with children.",
      treatment: "Pediatric Care",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Emergency Care" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  ✨ Award-Winning Dental Care
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Your Perfect Smile Starts Here
                </h1>
                <p className="text-xl text-gray-600">
                  Experience exceptional dental care with our team of expert
                  dentists. We provide comprehensive, gentle treatment in a
                  modern, comfortable environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-sky-50"
                >
                  View Services
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Same Day Appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Insurance Accepted</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/hero-bg.webp"
                    alt="Modern Dental Care"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Modern Dental Care
                      </h3>
                      <p className="text-gray-200">
                        State-of-the-art equipment & techniques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to complex procedures, we offer complete
              dental care for patients of all ages in a comfortable, modern
              environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-sky-50"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Experience the Difference
                </h2>
                <p className="text-lg text-gray-600">
                  Our commitment to excellence, advanced technology, and patient
                  comfort sets us apart as the premier dental practice in the
                  area.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">
                      Board-certified dentists with years of specialized
                      experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Advanced Technology
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art equipment for precise, comfortable
                      treatment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Patient-Centered Care
                    </h3>
                    <p className="text-gray-600">
                      Personalized treatment plans tailored to your unique needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  5000+ Happy Patients
                </h3>
                <p className="text-gray-600">
                  Join our family of satisfied patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
              Patient Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.treatment}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Schedule your consultation today and take the first step towards
              optimal oral health and a confident smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Book Your Appointment
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Call +92 300 1234567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
