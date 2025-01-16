const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-cyan-600 mb-6 text-center">
                    Termes et Conditions
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        1. Introduction
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Bienvenue sur Dz.Tour. En utilisant notre plateforme, vous acceptez nos
                        termes et conditions. Veuillez les lire attentivement avant d'utiliser nos
                        services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        2. Utilisation du service
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Vous acceptez d'utiliser Dz.Tour uniquement à des fins légales et
                        conformément à nos politiques. Toute utilisation abusive peut entraîner
                        la suspension ou la résiliation de votre compte.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        3. Réservations et paiements
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Toutes les réservations effectuées via Dz.Tour doivent être confirmées.
                        Les paiements sont sécurisés et effectués via notre plateforme ou
                        nos partenaires.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        4. Annulations et remboursements
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Les politiques d'annulation et de remboursement varient en fonction des
                        activités réservées. Veuillez consulter les détails spécifiques pour
                        chaque activité avant de réserver.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        5. Propriété intellectuelle
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Tout le contenu sur Dz.Tour, y compris les textes, graphiques et logos,
                        est protégé par des droits de propriété intellectuelle. Toute utilisation
                        non autorisée est strictement interdite.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        6. Modifications
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Dz.Tour se réserve le droit de modifier ces termes et conditions à tout
                        moment. Veuillez vérifier cette page régulièrement pour rester informé
                        des changements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        7. Contactez-nous
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Si vous avez des questions concernant ces termes et conditions, veuillez
                        nous contacter à <a href="mailto:support@dz-tour.com" className="text-cyan-600 underline">support@dz-tour.com</a>.
                    </p>
                </section>

                <p className="text-center text-gray-500 text-sm mt-10">
                    © 2023 Dz.Tour. Tous droits réservés.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
