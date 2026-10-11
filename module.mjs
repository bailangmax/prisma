// @ts-check
import { module } from "@prisma/composer";
import nodejsService from "./service.mjs";

export default module("nodejs", ({ provision }) => {
  provision(nodejsService);
});
