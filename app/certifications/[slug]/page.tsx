import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SkillTag } from "@/components/skill-tag";
import { getCertificationBySlug, getRelatedCertifications } from "@/lib/data";
import { notFound } from "next/navigation";
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator";
import { AnimatedSection } from "@/components/animated-section";
import { PortfolioHeader } from "@/components/portfolio-header";

interface CertificationPageProps {
  params: {
    slug: string;
  };
}

export default function CertificationPage({ params }: CertificationPageProps) {
  const certification = getCertificationBySlug(params.slug);
  const relatedCertifications = getRelatedCertifications(params.slug);

  if (!certification) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Back Button */}
        <AnimatedSection animation="fade-in">
          <Link
            href="/#credentials"
            className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Back to Credentials
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Certification Header */}
          <AnimatedSection animation="fade-up" className="lg:col-span-3">
            <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80 w-full bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                {certification.certificateUrl && (
                  <div className="absolute inset-4 rounded-lg overflow-hidden border border-zinc-700/50">
                    <Image
                      src={certification.certificateUrl}
                      alt={`${certification.name} Certificate`}
                      fill
                      className="object-contain bg-white p-2"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-cyan-400 mb-1 sm:mb-2 flex items-center">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {certification.issuer} Certification
                  </div>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">
                    {certification.name}
                  </h1>
                  <p className="text-sm text-zinc-400 mt-1 sm:mt-2 max-w-2xl">
                    Completed {certification.completionDate} •{" "}
                    {certification.duration}
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Certification Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Course Overview
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300">
                    {certification.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {certification.projects &&
                    certification.projects.length > 0 && (
                      <AnimatedSection animation="fade-up" delay={200}>
                        <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                          Projects Built
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-zinc-300">
                          {certification.projects.map((project, index) => (
                            <li key={index}>{project}</li>
                          ))}
                        </ul>
                      </AnimatedSection>
                    )}

                  <AnimatedSection animation="fade-up" delay={300}>
                    <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                      Skills Acquired
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {certification.skills.map((skill, index) => (
                        <SkillTag key={index}>{skill}</SkillTag>
                      ))}
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={400}>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                      {certification.courseUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs sm:text-sm"
                        >
                          <a
                            href={certification.courseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Course
                          </a>
                        </Button>
                      )}
                      {certification.certificateUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-xs sm:text-sm"
                        >
                          <a
                            href={certification.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Verify Certificate
                          </a>
                        </Button>
                      )}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Certification Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <AnimatedSection animation="slide-left" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Certification Details
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400 flex items-center">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Issuer
                      </h3>
                      <p className="text-sm sm:text-base">
                        {certification.issuer}
                      </p>
                    </div>

                    {certification.instructor && (
                      <div>
                        <h3 className="text-xs sm:text-sm font-medium text-zinc-400 flex items-center">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          Instructor
                        </h3>
                        <p className="text-sm sm:text-base">
                          {certification.instructor}
                        </p>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400 flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Completion Date
                      </h3>
                      <p className="text-sm sm:text-base">
                        {certification.completionDate}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400 flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Duration
                      </h3>
                      <p className="text-sm sm:text-base">
                        {certification.duration}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Other Certifications */}
            {relatedCertifications.length > 0 && (
              <AnimatedSection animation="slide-left" delay={200}>
                <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                      Other Certifications
                    </h2>
                    <div className="space-y-3 sm:space-y-4">
                      {relatedCertifications.map((related, index) => (
                        <AnimatedSection
                          key={index}
                          animation="fade-up"
                          delay={100 * (index + 1)}
                        >
                          <Link
                            href={`/certifications/${related.slug}`}
                            className="block group"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                              </div>
                              <div>
                                <h3 className="text-sm sm:text-base font-medium group-hover:text-cyan-400 transition-colors line-clamp-2">
                                  {related.name}
                                </h3>
                                <p className="text-xs text-zinc-400">
                                  {related.issuer} • {related.date}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>
            © {new Date().getFullYear()} Srinath Shrestha. All rights reserved.
          </p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  );
}
