"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, CreditCard, Dumbbell, Heart, Instagram, Star, Target, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Classes", id: "feature" },
            { name: "Trainers", id: "team" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FitCore Gym"
          button={{
            text: "Join Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Body, Elevate Your Mind"
          description="Join FitCore Gym and discover state-of-the-art equipment, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals."
          tag="Premium Fitness"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Classes",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern gym interior with professional equipment"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About FitCore"
          description={[
            "At FitCore Gym, we believe fitness is more than just physical transformation—it's about building confidence, strength, and a healthier lifestyle.",
            "Our mission is to provide you with world-class facilities, expert guidance, and an inspiring community that supports your fitness journey every step of the way."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "team"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="World-Class Facilities"
          description="Experience premium amenities designed to maximize your workout potential"
          tag="Facilities"
          tagIcon={Dumbbell}
          features={[
            {
              title: "Strength Training Zone",
              description: "Professional-grade free weights, machines, and functional training equipment for all fitness levels",
              icon: Dumbbell
            },
            {
              title: "Cardio Equipment",
              description: "Latest treadmills, ellipticals, and bikes with entertainment systems and heart rate monitoring",
              icon: Heart
            },
            {
              title: "Group Fitness Classes",
              description: "Dynamic classes including yoga, HIIT, spin, and strength training led by certified instructors",
              icon: Users
            },
            {
              title: "Personal Training",
              description: "One-on-one sessions with expert trainers to create customized workout plans for your goals",
              icon: Target
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Expert Trainers"
          description="Certified professionals dedicated to helping you reach your fitness goals"
          tag="Our Team"
          tagIcon={Award}
          members={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Head Personal Trainer",
              imageSrc: "https://images.pexels.com/photos/7055723/pexels-photo-7055723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson - Head Personal Trainer",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/sarahfitness"
                }
              ]
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Strength & Conditioning Coach",
              imageSrc: "https://images.pexels.com/photos/4058411/pexels-photo-4058411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Rodriguez - Strength Coach",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/mikestrength"
                }
              ]
            },
            {
              id: "3",
              name: "Alex Chen",
              role: "Group Fitness Instructor",
              imageSrc: "https://images.pexels.com/photos/6739930/pexels-photo-6739930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Chen - Group Fitness Instructor",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/alexfitness"
                }
              ]
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "Yoga & Wellness Coach",
              imageSrc: "https://images.pexels.com/photos/6740311/pexels-photo-6740311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Williams - Yoga Coach",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/emmayoga"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Success Stories"
          description="Real transformations from our amazing members"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "John Smith",
              handle: "@johnfitness",
              testimonial: "FitCore changed my life! Lost 30 pounds and gained so much confidence. The trainers are incredible and the community is so supportive.",
              imageSrc: "https://images.pexels.com/photos/6456206/pexels-photo-6456206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "John Smith gym member"
            },
            {
              id: "2",
              name: "Lisa Davis",
              handle: "@lisastrong",
              testimonial: "Best gym experience ever! The facilities are top-notch and the group classes are addictive. I actually look forward to working out now!",
              imageSrc: "https://images.pexels.com/photos/5629215/pexels-photo-5629215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Davis gym member"
            },
            {
              id: "3",
              name: "David Martinez",
              handle: "@davidlifts",
              testimonial: "The personal training sessions transformed my approach to fitness. I've never been stronger or felt better about myself.",
              imageSrc: "https://images.pexels.com/photos/8555480/pexels-photo-8555480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Martinez gym member"
            },
            {
              id: "4",
              name: "Maria Garcia",
              handle: "@mariafitness",
              testimonial: "FitCore is more than a gym—it's a community. The support and motivation from everyone here is unmatched.",
              imageSrc: "https://images.pexels.com/photos/7697775/pexels-photo-7697775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Garcia gym member"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Membership"
          description="Flexible plans designed to fit your lifestyle and fitness goals"
          tag="Membership Plans"
          tagIcon={CreditCard}
          plans={[
            {
              id: "basic",
              price: "$29/month",
              name: "Basic Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Access to gym equipment",
                "Locker room facilities",
                "Basic workout plans",
                "Mobile app access"
              ]
            },
            {
              id: "premium",
              badge: "Most popular plan",
              badgeIcon: Star,
              price: "$49/month",
              name: "Premium Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "All Basic features",
                "Unlimited group classes",
                "2 personal training sessions",
                "Nutrition consultation",
                "Guest passes (2/month)"
              ]
            },
            {
              id: "elite",
              price: "$89/month",
              name: "Elite Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "All Premium features",
                "Unlimited personal training",
                "Priority class booking",
                "Meal planning service",
                "Exclusive member events"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Fitness Journey?"
          description="Contact us today to schedule a free consultation and tour of our facilities. Let's discuss how we can help you achieve your fitness goals."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals or any questions you have...",
            rows: 4,
            required: false
          }}
          imageSrc="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="FitCore gym reception area"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="FitCore Gym"
          columns={[
            {
              items: [
                {
                  label: "Classes",
                  href: "feature"
                },
                {
                  label: "Personal Training",
                  href: "feature"
                },
                {
                  label: "Facilities",
                  href: "feature"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Trainers",
                  href: "team"
                },
                {
                  label: "Success Stories",
                  href: "testimonial"
                }
              ]
            },
            {
              items: [
                {
                  label: "Membership Plans",
                  href: "pricing"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Free Consultation",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}