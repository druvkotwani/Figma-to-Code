import React from 'react'
import TwitterCard from './TwitterCard';

const testimonialsCardContent = [
    {
        name: "Savannah Nguyen",
        hashtag: '#eewdnmxc',
        username: '@Kristin Watson',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
        name: "Ralph Edwards",
        hashtag: '#eewdnmxc',
        username: '@Wade Warren',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
        name: "Devon Lane",
        hashtag: '#eewdnmxc',
        username: '@Kristin Watson',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
        name: "Theresa Webb",
        hashtag: '#eewdnmxc',
        username: '@Bessie Cooper',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
        name: "Annette Black",
        hashtag: '#eewdnmxc',
        username: '@soroushnrz7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },


];

const Testimonial = () => {
    return (
        <div className="bg-[#252835] flex flex-col justify-center gap-10 w-full px-8 py-[113px]">
            <div className="flex flex-col justify-between gap-8">
                {testimonialsCardContent.map((testimonial, index) => (
                    <TwitterCard key={index} name={testimonial.name} username={testimonial.username} hashtag={testimonial.hashtag} text={testimonial.content} index={index} />
                ))}
            </div>



        </div>
    )
}

export default Testimonial