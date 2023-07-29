import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    setTimeout(()=>{
        router.push('/')
    },5000)
  return (
    <div>
      <img
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
        alt=""
        width='100%'
      />
    </div>
  );
};

export default ErrorPage;
