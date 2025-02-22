const CheckoutModal = ({ closeModal }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <p>Enter your payment details and address to complete the order.</p>
          <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default CheckoutModal;
  