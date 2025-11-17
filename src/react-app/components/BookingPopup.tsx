import { X } from 'lucide-react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 z-10"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
          
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            Reserva la teva sessió
          </h2>
          <p className="text-gray-600">
            Selecciona el servei i la data que millor t'convingui
          </p>
        </div>

        {/* Square Appointments Widget */}
        <div className="p-0">
          <iframe
            src="https://square.site/appointments/buyer/widget/3jbfe78qdcpnkm/L1SS4W13ETGSG"
            className="w-full min-h-[600px] border-0"
            title="Square Appointments Booking"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
