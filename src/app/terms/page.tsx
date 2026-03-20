import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Empower Building Marketing",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: March 19, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Empower Agency Dashboard at
              agency.empowerbuilding.ai, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our
              service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              2. Description of Service
            </h2>
            <p>
              Empower Agency Dashboard is a marketing management platform that
              allows authorized users to manage Facebook advertising campaigns,
              schedule and publish Facebook page posts, view and manage CRM
              leads, and monitor campaign performance metrics for multiple
              clients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              3. Account Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials
              </li>
              <li>
                You agree to notify us immediately of any unauthorized use of
                your account
              </li>
              <li>
                You are responsible for all activities that occur under your
                account
              </li>
              <li>
                You must have proper authorization to manage the client accounts
                you access through our platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              4. Facebook Integration
            </h2>
            <p>
              Our service integrates with the Facebook/Meta platform. By
              connecting your Facebook account, you authorize us to access and
              manage your pages, ad accounts, and lead data in accordance with
              our Privacy Policy. You must comply with Meta&apos;s Terms of
              Service and advertising policies when using our platform to manage
              Facebook content and ads.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              5. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Use the service for any unlawful purpose or in violation of
                applicable advertising regulations
              </li>
              <li>
                Share access credentials or allow unauthorized persons to access
                client data
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or disassemble any
                portion of the service
              </li>
              <li>
                Transmit any malicious code, viruses, or harmful content through
                the platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              The Empower Agency Dashboard, including all software, design, text,
              and graphics, is owned by Empower Building Marketing and protected
              by applicable intellectual property laws. You may not copy,
              modify, or distribute any part of our service without written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              Empower Building Marketing shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use
              of the service. Our total liability shall not exceed the amount
              paid by you for the service in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              8. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the
              service at any time for violation of these terms. Upon
              termination, your right to use the service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              9. Contact
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at
              legal@empowerbuilding.ai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
