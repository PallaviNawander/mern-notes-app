import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center p-6 gap-4">

                    <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full">
                        <ZapIcon className="size-8 text-primary" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-xl font-semibold mb-2">
                            Rate Limit Reached
                        </h2>

                        <p className="text-base-content/70">
                            You've made too many requests in a short period of time.
                            Please wait a little while before trying again.
                        </p>

                        <p className="text-sm text-base-content/50 mt-2">
                            This limit helps us keep the application fast and reliable
                            for everyone.
                        </p>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-primary"
                    >
                        Try Again
                    </button>

                </div>
            </div>
        </div>
    );
};

export default RateLimitedUI;