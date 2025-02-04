import React from 'react';

const InteractiveMap: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Our Special Places 🌍</h2>
            <iframe
                width="100%"
                height="400"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8c8!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1633031100000!5m2!1sen!2sau"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
};

export default InteractiveMap;