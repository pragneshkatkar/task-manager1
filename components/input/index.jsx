export default function Input(props) {
    const { label, attrs, additionalClasses, err, position, suffix } = props;

    return (
        <div className={`${additionalClasses}`}>
            {label && (
                <label className="block text-xs text-gray1 font-cabin mb-[5px] pl-5">
                    {label}
                </label>
            )}
            <label
                className={`flex items-center bg-white relative h-11 px-5 ${
                    suffix ? "pr-[10px]" : ""
                } rounded-full gap-2.5 border border-gray-300`}
            >
                <input
                    className={`w-full font-cabin font-semibold text-black1 text-base bg-white hover:border-verylightgray transition-all`}
                    {...attrs}
                />
                {suffix}
            </label>
            {err && <p className="err">{err}</p>}
        </div>
    );
}
