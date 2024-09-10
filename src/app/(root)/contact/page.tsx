import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import FAQSection from "@/sections/FAQSection";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const page = () => {
  const contactDetails = [
    {
      title: "Email",
      description: "Send us an email at",
      contact: {
        title: "prt15@iitbbs.ac.in",
        link: "mailto",
      },
      icon: Mail,
    },
    {
      title: "Phone",
      description: "Call at",
      contact: {
        title: "+91 8897937232",
        link: "tel",
      },
      icon: Phone,
    },
    {
      title: "Address",
      description: "123 Main Street, City, Country",
      contact: {
        title: "Get Directions",
        link: "https://www.google.com/maps?q=",
      },
      icon: MapPin,
    },
  ];

  return (
    <div className="*:py-10 sm:*:py-28">
      <section className="*:flex-1 sm:flex">
        <div className="space-y-4">
          <p className="font-semibold">Contact</p>
          <h1>Get in Touch</h1>
        </div>
        <div className="space-y-6">
          <p>
            We would love to hear from you. Please fill out the form below and
            our team will get back to you as soon as possible.
          </p>
          <Button>
            <a href="#contact-form">Fill the Form</a>
          </Button>
        </div>
      </section>
      <section className="space-y-6 sm:space-y-20">
        <div>
          <h6 className="font-medium">
            Have any questions or need assistance? We're here to help!
          </h6>
        </div>
        <div className="gap-x-20 sm:flex">
          <div className="w-96 space-y-10">
            {contactDetails.map((item, idx) => (
              <div key={`${item.title}-${idx}`}>
                <div className="space-y-4">
                  <item.icon className="text-primary" />
                  <div className="space-y-2">
                    <h6>{item.title}</h6>
                    <p className="text-base">{item.description}</p>
                    <p className="text-base text-primary underline">
                      <Link
                        href={`${item.contact.link}:${item.contact.title}`}
                        target="_blank"
                      >
                        {item.contact.title}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex-1 overflow-hidden rounded sm:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089804452!2d77.46612814580683!3d12.953945615402125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723142104413!5m2!1sen!2sin"
              width="600"
              height="450"
              className="h-full w-full border-none outline-0"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="space-y-12" id="contact-form">
        <div className="space-y-4 text-center">
          <p className="font-semibold">Get in Touch</p>
          <h2>Contact us</h2>
          <p>Have a question or need assistance? We're here to help.</p>
        </div>
        <form className="mx-auto max-w-3xl space-y-6">
          <div className="gap-x-12 space-y-6 *:flex-1 sm:flex sm:space-y-0">
            <div className="space-y-2">
              <label>First Name</label>
              <Input />
            </div>
            <div className="space-y-2">
              <label>Last Name</label>
              <Input />
            </div>
          </div>
          <div className="gap-x-12 space-y-6 *:flex-1 sm:flex sm:space-y-0">
            <div className="space-y-2">
              <label>Email</label>
              <Input />
            </div>
            <div className="space-y-2">
              <label>Phone Number</label>
              <Input />
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <label htmlFor="topic">Choose a Topic</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Pre-Purchase Inquiries</SelectLabel>
                    <SelectItem value="product-info">
                      Need more details about a product
                    </SelectItem>
                    <SelectItem value="size-guide">
                      Help with sizing or measurements
                    </SelectItem>
                    <SelectItem value="stock">
                      Checking item availability
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Order Processing</SelectLabel>
                    <SelectItem value="payment-issue">
                      Problem with payment processing
                    </SelectItem>
                    <SelectItem value="order-status">
                      Checking order status
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Delivery Issues</SelectLabel>
                    <SelectItem value="delivery-delay">
                      Order delivery is delayed
                    </SelectItem>
                    <SelectItem value="missing-item">
                      Item missing from delivered package
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Product Issues</SelectLabel>
                    <SelectItem value="wrong-item">
                      Received incorrect item
                    </SelectItem>
                    <SelectItem value="damage">
                      Product arrived damaged
                    </SelectItem>
                    <SelectItem value="usage-help">
                      Help with using the product
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Post-Purchase Support</SelectLabel>
                    <SelectItem value="warranty">
                      Warranty claim or question
                    </SelectItem>
                    <SelectItem value="return">
                      Want to return or exchange an item
                    </SelectItem>
                    <SelectItem value="refund-status">
                      Checking refund status
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Account & Feedback</SelectLabel>
                    <SelectItem value="account">
                      Issues with my account or login
                    </SelectItem>
                    <SelectItem value="feedback">
                      Provide feedback on shopping experience
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <p className="text-base">Which best describes you?</p>
              <div className="flex gap-x-6 *:flex-1 *:space-y-3.5">
                <div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="General Inquiry"
                      className="h-4 w-4"
                    />
                    <label htmlFor="General Inquiry">General Inquiry</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="Billing question"
                      className="h-4 w-4"
                    />
                    <label htmlFor="Billing question">Billing question</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="Hardware Support"
                      className="h-4 w-4"
                    />
                    <label htmlFor="Hardware Support">Hardware Support</label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="Product support"
                      className="h-4 w-4"
                    />
                    <label htmlFor="Product support">Product support</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="Technical issue"
                      className="h-4 w-4"
                    />
                    <label htmlFor="Technical issue">Technical issue</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="contact"
                      id="Other"
                      className="h-4 w-4"
                    />
                    <label htmlFor="Other">Other</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <textarea
              placeholder="Enter your message"
              className="block max-h-96 min-h-44 w-full rounded border border-gray-500 p-3"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              name=""
              id="terms"
              className="rounded-none"
            />
            <label htmlFor="terms">I accept the terms</label>
          </div>
          <Button type="submit" className="mx-auto">
            Submit
          </Button>
        </form>
      </section>
      <FAQSection />
    </div>
  );
};
export default page;
