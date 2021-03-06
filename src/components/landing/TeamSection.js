import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="current projects">
                    latest writings, project updates, important links
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="first div cat sold"
                    />
                    <TeamCard
                        img={Image2}
                        name="project: starshine art"
                    />
                    <TeamCard
                        img={Image3}
                        name="music links"
                    />
                    <TeamCard
                        img={Image4}
                        name="code examples/snippets"
                    />
                </div>
            </div>
        </section>
    );
}
