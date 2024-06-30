// src/components/ResourcesSection.js
import React from 'react';
import '../resourceSection/resourceSection.css';


const resources = [
{
    category: 'Services',
    title: '6 signs you may need new brakes',

},
{
    category: 'Maintenance',
    title: 'How Can Potholes Damage Your Tire?',
    image: '',
},
{
    category: 'Tires',
    title: 'Are Your Tire Worn Out?',
    image: '/path/to/image3.jpg',
},
{
    category: 'Services',
    title: '6 signs you may need new brakes',
    image: '/path/to/image4.jpg',
},
{
    category: 'Services',
    title: '6 signs you may need new brakes',
    image: '/path/to/image5.jpg',
},
];

const ResourcesSection = () => {
return (
    <div className="resources-section">
        <h2>RESOURCES</h2>
        <p>Tips and tricks to keep you rolling</p>
        <div className="resource-grid">
        {resources.map((resource, index) => (
            <div key={index} className="resource-card">
            <img src={resource.image} alt={resource.title} />
            <div className="resource-info">
                <span className="category">{resource.category}</span>
                <p className="title">{resource.title}</p>
            </div>
            </div>
        ))}
    </div>
    </div>
);
};

export default ResourcesSection;
