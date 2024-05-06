import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

export default function Career() {
  const form = useForm();
  const {
    register,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = form;

  useFormPersist("chooseUs", {
    watch,
    setValue,
  });

  const terms = watch("terms");

  const submitForm = () => {
    if (terms) {
      console.log("Form submit");
      reset();
    } else {
      console.log("Confirm your consent to the processing of personal data.");
    }
  };

  return (
    <section>
      <div>
        <h2>CHOOSE US</h2>
        <p>
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
      </div>
      <p>Why us ?</p>

      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label>
          Full name
          <input
            type="text"
            {...register("fullName", {
              required: true,
              pattern: {
                value: /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/,
                message: "Incorrect name",
              },
            })}
            placeholder="John Smith"
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
            placeholder="johnsmith@email.com"
          />
        </label>
        <label>
          Position
          <input
            type="text"
            {...register("position", {
              required: true,
              pattern: {
                value: /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/,
                message: "Incorrect position",
              },
            })}
            placeholder="Movie maker"
          />
        </label>
        <label>
          Phone
          <input
            type="number"
            {...register("number", {
              required: true,
              pattern: {
                value: /^[+]?[0-9]+(?:[ -]?[0-9]+){10,}$/,
                message: "Incorrect number",
              },
            })}
            placeholder="+ 38 (097) 12 34 567"
          />
        </label>
        <label>
          I confirm my consent to the processing of personal data.
          <input type="checkbox" {...register("terms", { required: true })} />
          {/* {errors.terms && (
            <p>Confirm your consent to the processing of personal data.</p>
          )} */}
        </label>
        <label>
          Message
          <textarea type="text" {...register("message")} />
        </label>

        <button type="submit">SEND</button>
      </form>
    </section>
  );
}
