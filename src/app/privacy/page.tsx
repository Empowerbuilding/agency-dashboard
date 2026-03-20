import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Empower Building Marketing",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-accent text-sm hover:underline mb-8 inline-block"
        >
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: March 19, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              1. Introduction
            </h2>
            <p>
              Empower Building Marketing (&quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) operates the Empower Agency Dashboard application.
              This privacy policy explains how we collect, use, and protect your
              information when you use our service at agency.empowerbuilding.ai.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Account Information:</strong> Email address and
                authentication credentials when you create an account.
              </li>
              <li>
                <strong>Facebook Data:</strong> When you connect your Facebook
                account, we access page information, ad campaign data, lead form
                data, and page post engagement metrics through the Facebook Graph
                API.
              </li>
              <li>
                <strong>Lead Data:</strong> Contact information (name, email,
                phone) of leads generated through Facebook lead ads and other
                marketing channels.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our dashboard, including pages visited and features used.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and maintain our dashboard service</li>
              <li>To manage your Facebook ad campaigns and page posts</li>
              <li>
                To display lead data and campaign performance metrics
              </li>
              <li>To schedule and publish content to connected Facebook pages</li>
              <li>To improve and optimize our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              4. Facebook Data Usage
            </h2>
            <p>
              We use Facebook data solely for the purpose of managing your
              marketing campaigns and displaying performance metrics within our
              dashboard. We do not sell, share, or transfer Facebook data to
              third parties. All Facebook data usage complies with Meta&apos;s
              Platform Terms and Developer Policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              5. Data Storage and Security
            </h2>
            <p>
              Your data is stored securely using Supabase, with encryption at
              rest and in transit. We implement industry-standard security
              measures to protect your information from unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your data for as long as your account is active. Upon
              account deletion, we will remove your personal data and
              disconnected Facebook data within 30 days, except where required by
              law to retain it longer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>
                Disconnect your Facebook account at any time through Settings
              </li>
              <li>Export your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              8. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, please contact us at
              privacy@empowerbuilding.ai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
