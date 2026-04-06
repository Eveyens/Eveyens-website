import { type ReactNode } from 'react';
import { type LucideIcon, CheckCircle } from 'lucide-react';

interface FlipCardFront {
  imageUrl: string;
  title: string;
  icon: LucideIcon;
  subtitle?: string;
  badge?: string;
  extraContent?: ReactNode;
}

interface FlipCardBack {
  title: string;
  description: string;
  details?: string[];
  link?: { url: string; label: string; icon?: LucideIcon };
  icon?: LucideIcon;
  gradient?: string;
  variant?: 'default' | 'service' | 'expertise';
}

interface FlipCardProps {
  height?: string;
  front: FlipCardFront;
  back: FlipCardBack;
}

export function FlipCard({ height = 'h-64', front, back }: FlipCardProps) {
  const BackIcon = back.icon ?? front.icon;
  const gradient = back.gradient ?? 'linear-gradient(135deg, #ffae3a1a, #fffe9f1a, #ffae3a1a)';

  return (
    <div className={`group perspective-1000 ${height}`}>
      <div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d md:group-hover:rotate-y-180"
        onClick={(e) => {
          if (window.innerWidth < 768) {
            e.currentTarget.classList.toggle('rotate-y-180');
          }
        }}
      >
        {/* Recto - Image */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full rounded-xl shadow-lg relative overflow-hidden">
            <img
              src={front.imageUrl}
              loading="lazy"
              alt={front.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <front.icon className="w-16 h-16 text-white mb-4" />
              <div className="text-center px-4">
                <h3 className="text-xl font-bold">{front.title}</h3>
                {front.subtitle && (
                  <p className="text-sm mt-1">{front.subtitle}</p>
                )}
                {front.badge && (
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mt-2">
                    {front.badge}
                  </span>
                )}
                {front.extraContent}
              </div>
            </div>
          </div>
        </div>

        {/* Verso - Texte */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div
            className="w-full h-full rounded-xl shadow-lg p-6 flex flex-col"
            style={{ background: gradient }}
          >
            {back.variant === 'default' ? (
              /* Variante Home — centrée avec CheckCircle */
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{back.title}</h3>
                <p className="text-gray-600 leading-relaxed">{back.description}</p>
              </div>
            ) : back.variant === 'service' ? (
              /* Variante Services — icône + titre + description + liste */
              <>
                <div className="flex items-center mb-4">
                  <span className="rounded-lg inline-flex p-3 bg-primary-50 text-primary-700">
                    <BackIcon className="h-6 w-6" />
                  </span>
                  <h3 className="ml-4 text-lg font-medium text-secondary-900">{back.title}</h3>
                </div>
                <p className="text-base text-gray-500 mb-4">{back.description}</p>
                {back.details && (
                  <ul className="flex-1 space-y-3">
                    {back.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              /* Variante expertise/outil — centrée avec icône simple */
              <div className="flex flex-col justify-center items-center text-center h-full">
                <div
                  className="flex items-center justify-center h-12 w-12 rounded-md mb-4"
                  style={{ background: '#fff' }}
                >
                  <BackIcon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-medium text-secondary-900 mb-4">{back.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{back.description}</p>
                {back.link && (
                  <a
                    href={back.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-primary-500 hover:text-primary-600 text-base font-medium flex items-center"
                  >
                    {back.link.label}
                    {back.link.icon && <back.link.icon className="w-4 h-4 ml-1" />}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
