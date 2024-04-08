/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav:true,
  reloadOnOnline:true,
  aggressiveFrontEndNavCaching:true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true
  },
  swcMinify:true,
});
const nextConfig = {};

export default withPWA(nextConfig);

