"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield, Heart, Smile } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Ayesha Khan",
      role: "Lead Dentist & Founder",
      credentials: "DDS, MS",
      experience: "15+ years",
      specialties: ["General Dentistry", "Cosmetic Dentistry", "Implantology"],
      bio: "Dr. Smith is passionate about providing gentle, comprehensive dental care. She graduated with honors from Harvard School of Dental Medicine and has been serving the community for over 15 years.",
      image:
        "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Dr. Ali Khan",
      role: "Pediatric Dentist",
      credentials: "DDS, Pediatric Specialty",
      experience: "10+ years",
      specialties: [
        "Pediatric Dentistry",
        "Orthodontics",
        "Special Needs Care",
      ],
      bio: "Dr. Johnson specializes in making dental visits fun and comfortable for children. His gentle approach and kid-friendly techniques have made him a favorite among young patients.",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Dr. Fatima Ahmed",
      role: "Oral Surgeon",
      credentials: "DDS, Oral Surgery Specialty",
      experience: "12+ years",
      specialties: ["Oral Surgery", "Dental Implants", "Complex Extractions"],
      bio: "Dr. Chen brings advanced surgical expertise to our practice. She completed her residency at Johns Hopkins and specializes in complex oral surgical procedures.",
      image:
        "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Excellence & Safety",
      description:
        "We maintain the highest standards of clinical excellence and patient safety in everything we do.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "Community Focus",
      description:
        "We're committed to serving our community and building lasting relationships with our patients.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Continuous Learning",
      description:
        "We invest in ongoing education and the latest technology to provide cutting-edge dental care.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Practice Founded",
      description:
        "Dr. Smith established Dev Co Dental with a vision of exceptional patient care",
    },
    {
      year: "2012",
      event: "Technology Upgrade",
      description:
        "Invested in digital X-ray and CAD/CAM technology for better patient experience",
    },
    {
      year: "2015",
      event: "Team Expansion",
      description: "Added specialized pediatric and surgical departments",
    },
    {
      year: "2018",
      event: "Facility Renovation",
      description:
        "Complete modernization of our facility with state-of-the-art equipment",
    },
    {
      year: "2020",
      event: "5000+ Patients",
      description: "Reached milestone of serving over 5,000 satisfied patients",
    },
    {
      year: "2024",
      event: "Award Recognition",
      description:
        "Named 'Best Dental Practice' by the local community for the third consecutive year",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Committed to Your Smile
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, Dev Co Dental has been providing
              exceptional dental care with a personal touch. Meet our team and
              learn about our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600">
                  Dev Co Dental was founded in 2008 with a simple mission:
                  to provide exceptional dental care in a comfortable, welcoming
                  environment. What started as a small practice has grown into a
                  comprehensive dental center serving thousands of satisfied
                  patients.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment to staying at the forefront of dental
                  technology and techniques ensures that our patients receive
                  the best possible care. We believe that everyone deserves a
                  healthy, beautiful smile, and we work tirelessly to make that
                  belief a reality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Smile className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Patient-Centered Care
                </h3>
                <p className="text-gray-600">
                  Every decision we make is with our patients&apos; best
                  interests in mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from the way we treat our
              patients to how we approach dental care and community involvement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Expert Dentists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced, board-certified dentists is committed to
              providing personalized care with the latest techniques and
              technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 space-y-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-500">
                        {member.credentials} • {member.experience}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Milestones & Achievements
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Join Our Dental Family?
            </h2>
            <p className="text-xl text-sky-100 max-w-2xl mx-auto">
              Experience the BrightSmile difference. Schedule your consultation
              today and discover why thousands of patients trust us with their
              smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule Consultation
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
