import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 执行测试文件
async function runTests() {
  try {
    const testDir = join(__dirname, "test");
    const files = await readdir(testDir);

    // 过滤出 .ts 文件 (包括 .cts/.mts)
    const testFiles = files.filter((f) => /\.(c|m)?ts$/.test(f));

    // 并行执行所有测试文件
    await Promise.all(
      testFiles.map(async (file) => {
        const modulePath = `file://${join(testDir, file)}`;
        try {
          const module = await import(modulePath);

          // 执行默认导出函数
          if (typeof module?.default === "function") {
            await module.default();
          }
          // 执行名为 test 的导出函数
          else if (typeof module?.test === "function") {
            await module.test();
          }
          console.log(`✅ ${file} executed successfully`);
        } catch (error) {
          console.error(`❌ ${file} failed:`, error);
        }
      }),
    );
  } catch (error) {
    console.error("Test runner failed:", error);
    process.exit(1);
  }
}

// 立即执行
runTests().then(() => {
  console.log("🚀 All test files processed");
});
