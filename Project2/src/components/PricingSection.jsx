import Card from "./Card"
import HeaderComponent from "./HeaderComponent"

const PricingSection = () => {
    return (
        <div className="flex flex-col items-center py-16 px-24 gap-8 self-stretch">
            {/* Pricing TExt */}
            <HeaderComponent header="Flexible Pricing for Everyone" subheader='Unlock Your Creative Potential with Our Tailored Plans' />

            {/* Pricing Menu */}
            <div className="flex p-6 justify-between items-start self-stretch">
                <Card key={0} text='Starter' price="FREE" background="bg-brand-green" shadow="rgba(43, 205, 148, 0.50)" />
                <Card key={1} text='Professional' price="$26/M" background="bg-brand-light-purple" shadow="rgba(128, 128, 242, 0.50)" />
                <Card key={2} text='Organization' price='$100/M' background="bg-brand-pink-7" shadow="rgba(236, 39, 182, 0.50)" />

            </div>

        </div>

    )
}

export default PricingSection