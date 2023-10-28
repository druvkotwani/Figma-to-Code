
const ButtonPink = ({ text }) => {
  return (
    <button className="flex py-4 px-8 justify-center items-center gap-2 rounded-[99px] bg-brand-mix" style={{ boxShadow: "0px 0px 60px 0px rgba(236, 39, 182, 0.60)" }}>
      <p className="text-brand-off-white text-base font-medium leading-normal">
        {text}
      </p>
    </button>
  )
}

export default ButtonPink