import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItem {
    icon: typeof Mail | typeof Phone | typeof MapPin;
    title: string;
    content: string;
}

const contactInfo: ContactInfoItem[] = [
    {
        icon: Mail,
        title: 'Email',
        content: 'lucas.comte63700@gmail.com'
    },
    {
        icon: MapPin,
        title: 'Location',
        content: 'Geneva, Switzerland'
    }
];

export default function ContactInfo() {
    return (
        <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-8">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                                <Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                <p className="mt-1 text-gray-500">{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}