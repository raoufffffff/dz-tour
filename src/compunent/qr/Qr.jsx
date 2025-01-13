import { useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";

const QRCodeGenerator = ({ name }) => {
    const ticketRef = useRef(null); // Reference to the ticket div

    const downloadTicket = async () => {
        if (!ticketRef.current) return;

        // Use html2canvas to capture the ticket div
        const canvas = await html2canvas(ticketRef.current);
        const image = canvas.toDataURL("image/png"); // Convert to PNG format

        // Create a link to trigger the download
        const downloadLink = document.createElement("a");
        downloadLink.href = image;
        downloadLink.download = "ticket.png"; // File name
        downloadLink.click();
    };

    useEffect(() => {
        // Automatically download the ticket if the name is not null or empty
        if (name) {
            downloadTicket();
        }
    }, [name]); // Trigger the effect whenever the name prop changes

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="p-4" ref={ticketRef}>
                <div className="py-4 px-6 border border-cyan-600 rounded-xl flex flex-col items-center bg-white">
                    <h1 className="text-center text-3xl mt-4 mb-8">
                        Ticket
                        <span className="text-rose-500 text-sm ml-2">Dz</span>
                        <span className="text-sm">.</span>
                        <span className="text-cyan-600 text-sm">Tour</span>
                    </h1>

                    <QRCodeCanvas
                        value={name || ""}
                        size={200} // Size of the QR code
                        bgColor="#ffffff" // Background color
                        fgColor="#000000" // Foreground color
                        level="H" // Error correction level: L, M, Q, H
                    />
                    <h1 className="text-center text-3xl mt-8 mb-4">{name}</h1>
                </div>
            </div>

            <button
                onClick={downloadTicket}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-5"
            >
                Download Ticket
            </button>
        </div>
    );
};

export default QRCodeGenerator;
