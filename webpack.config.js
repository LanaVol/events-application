module.exports = {
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../src/video/", // Вкажіть шлях, куди будуть копіюватися відеофайли
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".mp4"],
  },
};
