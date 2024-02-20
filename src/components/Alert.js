import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Alert({ message }) {
  return (
    <div className="rounded-md bg-red-200 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XMarkIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-600">{message}</p>
        </div>
        <div className="ml-auto pl-3"></div>
      </div>
    </div>
  );
}
