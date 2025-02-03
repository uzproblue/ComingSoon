"use client";
import React, { useState } from "react";

export default function PublicOffer({ accepted, setAccepted }: any) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p onClick={() => setOpen(true)} className="mt-8 flex gap-1">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Accept Public agreement
      </p>
      {open && (
        <div className="w-screen h-screen bg-black bg-opacity-50 z-50 fixed left-0 top-0  flex items-center justify-center">
          <div className="w-[500px] bg-white p-8 max-h-[700px] overflow-y-scroll">
            <h1 className="text-lg font-medium">
              Public Agreement for Suzangaron Hotel Booking Website
            </h1>
            <p>
              This Agreement (hereinafter referred to as the `Agreement`)
              governs the relationship between you (hereinafter referred to as
              the `User`) and Suzangaron Hotel (hereinafter referred to as the
              `Hotel`) when using the hotel booking service on the website
              suzangaronhotel.com (hereinafter referred to as the Website).
              Please read the terms of this Agreement before using our services.
            </p>
            <h2 className="font-medium">1. Booking and Payment Methods</h2>
            <p>
              1.1. Hotel room reservations on the Website can be made using the
              online booking form. To complete the reservation, you need to
              provide guest information, choose your check-in and check-out
              dates, and confirm your selection of hotel and room type.
              <br />
              1.2. Payments can be made via a secure payment system using credit
              or debit cards (Visa, MasterCard, Maestro, and others), as well as
              electronic wallets, depending on the available options on the
              Website. All payments are processed by third-party providers who
              guarantee the security of your data. <br /> 1.3. Payment
              transactions are protected by encryption and comply with
              international security standards (PCI DSS).
            </p>
            <h2 className="font-medium">
              2. Return Policy (Cancellation of Service) and Bank Card
              Transaction Cancellation
            </h2>
            <p>
              2.1. You may cancel a reservation or refuse the service in
              accordance with the cancellation policy specified during booking.
              If the cancellation is made within the allowed period, a full or
              partial refund may be issued depending on the hotel`s cancellation
              policy.
              <br />
              2.2. In case of cancellation after the specified time frame, a
              penalty may be charged based on the booking terms (as per the
              hotel`s cancellation policy).
              <br />
              2.3. If you need to cancel a bank card transaction, the refund to
              the card will be processed within 5-7 business days, depending on
              the policies of the issuing bank.
            </p>

            <h2 className="font-medium">
              3. Delivery of Goods/Provision of Services
            </h2>
            <p>
              3.1. The services provided through the Website include room
              reservations at Suzangaron Hotel, as well as additional services
              such as transfers, tours, and others, depending on availability.
              <br />
              3.2. All services will be provided within the booked period.
              Delivery of goods (if applicable) will be carried out within the
              timeframes agreed upon with the User during the booking process.
              <br />
              3.3. If it is impossible to provide the service due to force
              majeure or other reasons, the Hotel will notify the User and offer
              alternative options.
            </p>

            <h2 className="font-medium">
              4. Security Measures for Card Transactions
            </h2>
            <p>
              4.1. All card transactions are processed through secure payment
              systems that comply with international security standards.
              <br />
              4.2. To ensure data protection, SSL encryption is used,
              guaranteeing the secure transmission of the User`s personal
              information.
              <br />
              4.3. The Hotel does not store any card information or other
              payment-related data. All such data is processed solely by third
              parties providing payment services.
            </p>

            <h2 className="font-medium">5. Privacy Policy</h2>
            <p>
              5.1. The Hotel respects the confidentiality of the User`s personal
              data. By using the Website, the User agrees that the Hotel may
              collect, process, and use personal data in accordance with
              applicable data protection laws.
              <br />
              5.2. The Hotel uses personal data solely for the purposes of
              booking and providing services, as well as improving service
              quality. We do not share your data with third parties, except as
              required by law.
              <br />
              5.3. The User has the right to request information about the data
              we store about them at any time, and to request correction or
              deletion of this data by sending a request to the Hotel`s email.
            </p>
            <hr />
            <p>
              The Hotel reserves the right to make changes to this Agreement.
              Any changes will be published on the Website, and the User is
              required to review them before continuing to use the services.
              This Agreement becomes effective once it is accepted by the User.
            </p>
            <button
              onClick={() => {
                setAccepted(true);
                setOpen(false);
              }}
              className="py-2 w-full bg-blue-500 text-white mt-3"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
