const BgChanger = ({bgButtonList = [], handler}) => {
  return (
    <div className="fixed flex bottom-8 inset-x-0 px-3 py-3 justify-center ">
      <div className="bg-white flex flex-wrap justify-center w-max gap-3 py-3 px-3 rounded-full border border-gray-100">
        {bgButtonList?.map((item) => {
          return (
            <button
              key={item?.id}
              style={{ backgroundColor: item?.bgColor, color: item?.color }}
              className="rounded-full outline-none py-1 px-4 shadow-inner font-normal text-base font-mono capitalize"
              onClick={() => handler(item?.bgColor)}
            >
              {item?.bgColor}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BgChanger;
