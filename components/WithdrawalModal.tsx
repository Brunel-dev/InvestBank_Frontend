import React from 'react';
import { Card, Button } from './ui';
import { CheckCircle2, AlertTriangle, Phone } from 'lucide-react';
import { User } from '../types';

interface WithdrawalModalProps {
  user: User | null;
  setActiveModal: (val: string) => void;
  openWhatsApp: () => void;
}

const WithdrawalModal: React.FC<WithdrawalModalProps> = ({ user, setActiveModal, openWhatsApp }) => {
  if (!user?.isActivated) {
    setTimeout(() => setActiveModal('ACTIVATE'), 0);
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-md animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white">Compte Vérifié</h3>
          <p className="text-slate-300 text-sm mt-2">
            Votre demande de retrait est prête à être traitée.
          </p>
        </div>

        <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-lg mb-6">
          <div className="flex gap-3">
            <AlertTriangle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
            <p className="text-xs text-slate-300 text-left">
              Pour finaliser la transaction et recevoir vos fonds instantanément, veuillez contacter votre agent dédié sur WhatsApp pour la validation finale.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button 
            variant="success"
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contacter l'Agent sur WhatsApp
          </Button>
          <Button variant="secondary" onClick={() => setActiveModal('NONE')}>
            Fermer
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default WithdrawalModal;
