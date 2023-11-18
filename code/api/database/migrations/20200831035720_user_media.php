<?php

use think\migration\Migrator;
use think\migration\db\Column;

class UserMedia extends Migrator
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
        $table = $this->table('user_media', array('engine' => 'InnoDB', 'comment' => '用户文件表', 'collation' => 'utf8mb4_general_ci'));
        $table->addColumn('uid', 'integer', ['default' => 0, 'comment' => '用户id', 'null' => false])
            ->addColumn('media_id', 'integer', ['default' => 0, 'comment' => '文件id', 'null' => false])
            ->addColumn('is_temp', 'integer', ['limit' => \Phinx\Db\Adapter\MysqlAdapter::INT_TINY, 'default' => 0, 'comment' => '是否临时文件,0-否,1-是', 'null' => false])
            ->addColumn('title', 'string', ['default' => '', 'comment' => '文件名称', 'null' => false])
            ->addColumn('desc', 'string', ['default' => '', 'comment' => '简要描述', 'null' => false])
            ->addColumn('download_count', 'integer', ['default' => 0, 'comment' => '下载次数', 'null' => false])
            ->addColumn('create_time', 'integer', ['default' => 0, 'comment' => '创建时间', 'null' => false])
            ->addColumn('update_time', 'integer', ['default' => 0, 'comment' => '更新时间', 'null' => false])
            ->addIndex(['uid'])
            ->addIndex(['title'])
            ->create();
    }
}
