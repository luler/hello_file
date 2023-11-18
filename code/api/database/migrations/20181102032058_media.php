<?php

use think\migration\Migrator;

class Media extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('media', array('engine' => 'InnoDB', 'comment' => '多媒体文件表', 'collation' => 'utf8mb4_general_ci'));
        $table->addColumn('file_ext', 'string', ['default' => '', 'comment' => '文件后缀', 'null' => false])
            ->addColumn('file_type', 'string', ['default' => '', 'comment' => '文件MIME类型', 'null' => false])
            ->addColumn('file_size', 'integer', ['default' => 0, 'comment' => '文件大小，字节', 'null' => false])
            ->addColumn('file_url', 'string', ['default' => '', 'comment' => '文件访问url', 'null' => false])
            ->addColumn('md5', 'string', ['limit' => 32, 'default' => '', 'comment' => '文件md5', 'null' => false])
            ->addColumn('create_time', 'integer', ['default' => 0, 'comment' => '创建时间', 'null' => false])
            ->addColumn('update_time', 'integer', ['default' => 0, 'comment' => '更新时间', 'null' => false])
            ->addIndex(['md5'])
            ->create();
    }
}
