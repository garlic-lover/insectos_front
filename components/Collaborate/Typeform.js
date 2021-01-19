import { useEffect, useRef } from "react";
import * as typeformEmbed from "@typeform/embed";

export default function TypeForm({ init }) {
  const typeformRef = useRef(null);

  // ?__dangerous-disable-submissions

  useEffect(() => {
    typeformEmbed.makeWidget(
      typeformRef.current,
      "https://6rvv2icgtjp.typeform.com/to/cwSJkUhJ",
      {
        hideFooter: false,
        hideHeaders: true,
        opacity: 50,
        onSubmit: ({ response_id }) => {
          console.log("response_id", response_id);
          init(response_id);
        },
      }
    );
  }, [typeformRef]);

  return (
    <div ref={typeformRef} style={{ height: "550px", width: "100%" }}></div>
  );
}
