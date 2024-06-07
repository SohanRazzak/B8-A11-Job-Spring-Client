import { Card, Spinner } from "keep-react";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const Testimonials = () => {
    const testimonials = useJobFinder(
        ["All Testimonials"],
        "/get-testimonials"
    );
    console.log(testimonials.data);
    if (testimonials.isLoading) {
        return (
            <div className="h-[400px] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    const { data } = testimonials;
    return (
        <ContainerLayout>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-lime-600 font-semibold mt-6">
                Whats People Say?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-5">
                {data?.slice(0, 4).map((tmony) => (
                    <Card
                        key={tmony._id}
                        className="bg-gray-50 p-5 text-gray-700"
                    >
                        <span className="text-2xl">{tmony?.name}</span>
                        <div className="flex gap-3 items-end">
                            <span className="text-md">{tmony?.position}</span>
                            <span className="text-sm">({tmony?.company})</span>
                        </div>
                        <blockquote className="px-4 py-2 mt-4 mb-auto border-s-4 border-gray-300 bg-gray-50">
                            <p className="text-xl italic font-medium text-gray-900 ">
                                {tmony?.testimonial}
                            </p>
                        </blockquote>
                    </Card>
                ))}
            </div>
        </ContainerLayout>
    );
};

export default Testimonials;
