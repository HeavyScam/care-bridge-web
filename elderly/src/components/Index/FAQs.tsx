import { Accordion } from "@mantine/core";

function FAQs() {
  return (
    <div id="faqs" className="mx-[10%] my-10">
      <h1 className="text-left text-2xl font-bold text-[#444BD3] mb-5">
        Frequently Asked Questions
      </h1>
      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQs;
