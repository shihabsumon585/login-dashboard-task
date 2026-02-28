import React from 'react';
import {
    Search,
    MessageCircle,
    FileText,
    HelpCircle,
    ExternalLink,
    ChevronRight,
    Mail,
    Video
} from 'lucide-react';

const Help = () => {
    const faqs = [
        { question: "How to add a new project?", category: "Getting Started" },
        { question: "Can I export my analytics data?", category: "Analytics" },
        { question: "How to invite team members?", category: "Collaboration" },
        { question: "Changing notification settings", category: "Account" },
    ];

    return (
        <div className="p-6 bg-[#f8fafc] min-h-screen font-sans">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
                <p className="text-gray-500 text-sm">Find answers, tutorials, and contact our team.</p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8 max-w-2xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search for articles, guides, or questions..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all bg-white shadow-sm"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Quick Help Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <HelpCard
                        icon={<FileText className="text-[#000000]" />}
                        title="Documentation"
                        desc="Detailed guides on how to use every feature of Donezo."
                    />
                    <HelpCard
                        icon={<Video className="text-[#000000]" />}
                        title="Video Tutorials"
                        desc="Watch step-by-step videos to master your workflow."
                    />
                    <HelpCard
                        icon={<MessageCircle className="text-[#000000]" />}
                        title="Community Forum"
                        desc="Join discussions and learn from other users."
                    />
                    <HelpCard
                        icon={<HelpCircle className="text-[#000000]" />}
                        title="API Reference"
                        desc="Technical docs for integrating our API into your apps."
                    />

                    {/* FAQ Section */}
                    <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-2">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Popular Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-100 transition-all">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">{faq.question}</p>
                                        <span className="text-[10px] uppercase tracking-wider text-[#10b981] font-bold">{faq.category}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Sidebar */}
                <div className="space-y-6">
                    <div className="bg-[#0a2310] rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                        {/* Decorative Circles */}
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-green-500 rounded-full opacity-20"></div>

                        <h3 className="text-lg font-semibold mb-2">Still Need Help?</h3>
                        <p className="text-green-100 text-xs mb-6 leading-relaxed">
                            Our support team is available 24/7 to help you with any technical issues or questions.
                        </p>

                        <button className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all">
                            <Mail size={18} />
                            Contact Support
                        </button>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-300">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Avg. response time: 15 mins
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <h4 className="font-semibold text-gray-800 mb-3 text-sm">Resources</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#10b981] cursor-pointer transition-colors">
                                <ExternalLink size={14} /> System Status
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#10b981] cursor-pointer transition-colors">
                                <ExternalLink size={14} /> Privacy Policy
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#10b981] cursor-pointer transition-colors">
                                <ExternalLink size={14} /> Terms of Service
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Sub-component for Quick Cards
const HelpCard = ({ icon, title, desc }) => (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group">
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#10b981] group-hover:text-white transition-all">
            {icon}
        </div>
        <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
);

export default Help;