/* libName: test */

import React from "react";

type TestEnvEnum = "qa" | "stage";

interface TestProps {
  env: TestEnvEnum;
  isOpen?: boolean;
  onClick?: Function;
  string?: string;
  number?: number;
  array: Array<unknown>;
  obj: unknown;
}

export const Test: React.ComponentClass<TestProps>;
