module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";
describe("${componentName}", () => {
  let props: ${componentName}Props;
  beforeEach(() => {});
  const renderComponent = () => render(<${componentName} {...props} />);
  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("${componentName}");
    // expect(component).toHaveTextContent("dustin");
  });
});
`,
  extension: `.test.tsx`,
});
