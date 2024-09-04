"use client";

// import { Course } from "@/data/navigation/courses";
import Link from "next/link";
import React, { useState } from "react";
// import { SiStudyverse } from "react-icons/si";

const Dropdown = () => {
  const [whichDataTobeShown, usewhichDataTobeShown] = useState("DMM");

  const handleToDataShown = (data) => {
    usewhichDataTobeShown(data);
  };

  return (
    <>
      <div className="container mx-auto showwer  absolute top-[80px] left-0 right-0 ">
        <div className="flex min-h-[20rem]">
          <div className="flex-[3] bg-green-200">
            <ul className="p-2">
              {ListView?.map((items, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleToDataShown(items.id)}
                  className="px-4 py-2 bg-red-700 rounded-lg text-white my-3 capitalize"
                >
                  {items.heading}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-[10] bg-red-400">
            <div className="grid grid-cols-4 gap-5 p-5">
              {CategoriesData[whichDataTobeShown]?.map((items, index) => {
                return (
                  <>
                    <Link href={items.URL} key={index}>
                      <li
                        title={items.title}
                        className="px-4 truncate py-2 bg-red-700 rounded-lg text-white  capitalize"
                      >
                        {items.title}
                      </li>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

const ListView = [
  {
    id: "DMM",
    heading: "Digital Marketing",
  },
  {
    id: "SMM",
    heading: "Social Media Marketing",
  },
  {
    id: "JMM",
    heading: "Job Market Management",
  },
  {
    id: "KMM",
    heading: "Knowledge Management",
  },
  {
    id: "LMM",
    heading: "Lead Management",
  },
  {
    id: "HNN",
    heading: "Health & Nutrition",
  },
];

const CategoriesData = {
  DMM: [
    { title: "Digital Marketing Strategy", URL: "/digital-marketing-strategy" },
    { title: "SEO Optimization", URL: "/seo-optimization" },
    { title: "Content Marketing", URL: "/content-marketing" },
    { title: "PPC Advertising", URL: "/ppc-advertising" },
    { title: "Email Marketing", URL: "/email-marketing" },
    { title: "Social Media Ads", URL: "/social-media-ads" },
    { title: "Affiliate Marketing", URL: "/affiliate-marketing" },
    { title: "Marketing Analytics", URL: "/marketing-analytics" },
    {
      title: "Conversion Rate Optimization",
      URL: "/conversion-rate-optimization",
    },
    { title: "E-commerce Marketing", URL: "/ecommerce-marketing" },
    { title: "Mobile Marketing", URL: "/mobile-marketing" },
    { title: "Online Branding", URL: "/online-branding" },
    { title: "Lead Generation", URL: "/lead-generation" },
    { title: "Marketing Automation", URL: "/marketing-automation" },
    { title: "Video Marketing", URL: "/video-marketing" },
    { title: "Local SEO", URL: "/local-seo" },
    { title: "Influencer Marketing", URL: "/influencer-marketing" },
    { title: "Web Analytics", URL: "/web-analytics" },
  ],
  SMM: [
    { title: "Facebook Ads", URL: "/facebook-ads" },
    { title: "Instagram Marketing", URL: "/instagram-marketing" },
    { title: "Twitter Advertising", URL: "/twitter-advertising" },
    { title: "LinkedIn Marketing", URL: "/linkedin-marketing" },
    { title: "Pinterest Ads", URL: "/pinterest-ads" },
    { title: "TikTok Marketing", URL: "/tiktok-marketing" },
    { title: "YouTube Ads", URL: "/youtube-ads" },
    { title: "Snapchat Ads", URL: "/snapchat-ads" },
    { title: "Social Media Analytics", URL: "/social-media-analytics" },
    { title: "Social Media Management", URL: "/social-media-management" },
    { title: "Content Creation", URL: "/content-creation" },
    { title: "Brand Engagement", URL: "/brand-engagement" },
    { title: "Social Media Strategy", URL: "/social-media-strategy" },
    { title: "Audience Targeting", URL: "/audience-targeting" },
    { title: "Influencer Partnerships", URL: "/influencer-partnerships" },
    { title: "Social Media Campaigns", URL: "/social-media-campaigns" },
    { title: "Reputation Management", URL: "/reputation-management" },
    { title: "Social Media Tools", URL: "/social-media-tools" },
  ],
  JMM: [
    { title: "Job Market Trends", URL: "/job-market-trends" },
    { title: "Resume Building", URL: "/resume-building" },
    { title: "Interview Preparation", URL: "/interview-preparation" },
    { title: "Career Counseling", URL: "/career-counseling" },
    { title: "Job Search Strategies", URL: "/job-search-strategies" },
    { title: "Networking Tips", URL: "/networking-tips" },
    { title: "Salary Negotiation", URL: "/salary-negotiation" },
    { title: "Professional Development", URL: "/professional-development" },
    { title: "Freelancing Opportunities", URL: "/freelancing-opportunities" },
    { title: "Career Change Guidance", URL: "/career-change-guidance" },
    { title: "Skill Development", URL: "/skill-development" },
    { title: "Job Market Insights", URL: "/job-market-insights" },
    { title: "Work-Life Balance", URL: "/work-life-balance" },
    { title: "Remote Work Resources", URL: "/remote-work-resources" },
    { title: "Entrepreneurship", URL: "/entrepreneurship" },
    { title: "Job Search Tools", URL: "/job-search-tools" },
    { title: "Internship Opportunities", URL: "/internship-opportunities" },
    { title: "Job Application Tips", URL: "/job-application-tips" },
  ],
  KMM: [
    {
      title: "Knowledge Management Systems",
      URL: "/knowledge-management-systems",
    },
    { title: "Document Management", URL: "/document-management" },
    { title: "Knowledge Sharing", URL: "/knowledge-sharing" },
    { title: "Content Management Systems", URL: "/content-management-systems" },
    { title: "Knowledge Repositories", URL: "/knowledge-repositories" },
    { title: "Information Retrieval", URL: "/information-retrieval" },
    { title: "Collaborative Tools", URL: "/collaborative-tools" },
    { title: "Data Management", URL: "/data-management" },
    { title: "Knowledge Transfer", URL: "/knowledge-transfer" },
    { title: "Organizational Learning", URL: "/organizational-learning" },
    { title: "Information Governance", URL: "/information-governance" },
    { title: "Knowledge Mapping", URL: "/knowledge-mapping" },
    { title: "Content Curation", URL: "/content-curation" },
    { title: "Best Practices Sharing", URL: "/best-practices-sharing" },
    {
      title: "Enterprise Knowledge Management",
      URL: "/enterprise-knowledge-management",
    },
    {
      title: "Knowledge Management Strategies",
      URL: "/knowledge-management-strategies",
    },
    { title: "Knowledge Management Tools", URL: "/knowledge-management-tools" },
    {
      title: "Knowledge Management Framework",
      URL: "/knowledge-management-framework",
    },
  ],
  LMM: [
    { title: "Lead Generation Techniques", URL: "/lead-generation-techniques" },
    { title: "CRM Integration", URL: "/crm-integration" },
    { title: "Lead Nurturing", URL: "/lead-nurturing" },
    { title: "Lead Scoring", URL: "/lead-scoring" },
    { title: "Lead Conversion Strategies", URL: "/lead-conversion-strategies" },
    { title: "Lead Management Software", URL: "/lead-management-software" },
    { title: "Lead Tracking", URL: "/lead-tracking" },
    { title: "Lead Qualification", URL: "/lead-qualification" },
    { title: "Lead Generation Tools", URL: "/lead-generation-tools" },
    {
      title: "Marketing Automation for Leads",
      URL: "/marketing-automation-for-leads",
    },
    { title: "Lead Generation Analytics", URL: "/lead-generation-analytics" },
    {
      title: "Lead Management Best Practices",
      URL: "/lead-management-best-practices",
    },
    { title: "Lead Funnel Optimization", URL: "/lead-funnel-optimization" },
    { title: "Lead Generation Campaigns", URL: "/lead-generation-campaigns" },
    { title: "Sales Lead Management", URL: "/sales-lead-management" },
    { title: "B2B Lead Generation", URL: "/b2b-lead-generation" },
    { title: "B2C Lead Generation", URL: "/b2c-lead-generation" },
  ],
  HNN: [
    { title: "Nutrition Basics", URL: "/nutrition-basics" },
    { title: "Healthy Eating Habits", URL: "/healthy-eating-habits" },
    { title: "Exercise and Fitness", URL: "/exercise-and-fitness" },
    { title: "Mental Health", URL: "/mental-health" },
    { title: "Wellness Strategies", URL: "/wellness-strategies" },
    { title: "Preventive Health", URL: "/preventive-health" },
    { title: "Healthy Recipes", URL: "/healthy-recipes" },
    { title: "Weight Management", URL: "/weight-management" },
    { title: "Stress Management", URL: "/stress-management" },
    { title: "Hydration Tips", URL: "/hydration-tips" },
    { title: "Sleep Hygiene", URL: "/sleep-hygiene" },
    { title: "Chronic Disease Management", URL: "/chronic-disease-management" },
    { title: "Fitness Plans", URL: "/fitness-plans" },
    { title: "Nutritional Supplements", URL: "/nutritional-supplements" },
    { title: "Healthy Lifestyle Choices", URL: "/healthy-lifestyle-choices" },
    {
      title: "Personalized Nutrition Plans",
      URL: "/personalized-nutrition-plans",
    },
    { title: "Health Monitoring", URL: "/health-monitoring" },
  ],
};
